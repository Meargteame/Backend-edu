import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const comparePasswords = (password, hash) => {
    return bcrypt.compare(password, hash);
}

export const hashPassword = (password) => {
    return bcrypt.hash(password, 10); // Increased from 5 to 10 for security
}

export const createJWT = (user) => {
    const token = jwt.sign(
        {
            id: user.id,
            username: user.username
        }, 
        process.env.JWT_SECRET_KEY, // Make sure this matches your .env
        { expiresIn: '1d' } // Added expiration
    );
    return token;
}

export const protect = (req, res, next) => {
    const bearer = req.headers.authorization;
    
    if (!bearer) {
        return res.status(401).send("Not authorized");
    }

    const [, token] = bearer.split(' ');
    
    if (!token) {
        return res.status(401).send("Not valid token");
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY); // Must match createJWT
        req.user = user;
        next();
    } catch (e) {
        console.log(e);
        return res.status(401).send("Not authorized");
    }
}
import { Router } from 'express';
const router = Router();

/**  
 * Product staff
 */
router.get('/product', (req,res) => { 
    res.json({message:"Hello from the router"})
})
router.get('/product/:id',()=>{})
router.put('/product',()=>{})
router.get('/product',()=>{})
router.delete('/product/:id',()=>{})



/**
 * Update staff
 */

router.get('/update', () => { })
router.get('/update/:id',()=>{})
router.put('/update',()=>{})
router.get('/update',()=>{})
router.delete('/update/:id',()=>{})

/**
 * Update Points staff
 */


router.get('/updatepoint', () => { })
router.get('/updatepoint/:id',()=>{})
router.put('/updatepoint',()=>{})
router.get('/updatepoint',()=>{})
router.delete('/updatepoint/:id',()=>{})



export default router
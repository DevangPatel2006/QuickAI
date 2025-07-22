import React from "react";
import sql from "../configs/db.js";



export const getUserCreations = async (req,res) => {
    try {
        const {userId}=req.auth();
        const creations = await sql`SELECT * FROM creations WHERE user_id = ${userId} ORDER BY created_at DESC`;
        res.json({success: true, creations});
        
    } catch (error) {
        res.json({success: false, message: "An error occurred while fetching creations."});
    }
}


export const getPublishedCreations = async (req,res) => {
    try {
        const creations = await sql`SELECT * FROM creations WHERE publish= true ORDER BY created_at DESC`;
        res.json({success: true, creations});
        
    } catch (error) {
        res.json({success: false, message: "An error occurred while fetching creations."});
    }
}


export const toggleLikeCreation = async (req,res) => {
    try {
        const {userId}=req.auth();
        const {id} =req.body;
        const {creation}=await sql`SELECT * FROM creations WHERE id = ${id}`;
        if(!creation) return res.json({success: false, message: "Creation not found."});
        const currentlikes=creation.likes;
        const userIdStr=userId.toString();
        let updatedLikes;
        let message;
        if(currentlikes.includes(userIdStr)){
            updatedLikes=currentlikes.filter(((userId) => user!== userIdStr));
            message="Unliked";
        }else{
            updatedLikes=[...currentlikes, userIdStr];
            message="Liked";
        }
        const formattedArray=`{${updatedLikes.join(',')}}`;
        await sql`UPDATE creations SET likes=${formattedArray}::text[] WHERE id = ${id}`;
        res.json({success: true, message});
        
    } catch (error) {
        res.json({success: false, message: "An error occurred while fetching creations."});
    }
}
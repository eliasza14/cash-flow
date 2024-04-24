import e from "express";
import argon2 from "argon2";
import db from "../config/Database.js";
import { Sequelize } from "sequelize";
import timologia from "../models/TimologiaModel.js";

export const getTimologia = async(req,res)=>{
    try{
        const response = await timologia.findAll({
            attributes:['id','invoice_date','estimate_payment_date','estimate_payment_date_2','estimate_payment_date_3','ammount_no_tax','ammount_tax_incl','estimate_tax', 'actual_payment_date', 'ammount_of_income_tax_incl', 'comments', 'verified', 'createdAt', 'updatedAt']
        });
        res.status(200).json(response);
    } catch(error){
        res.status(500).json({msg:error.message});

    }

}
export const CreateTimologia = async(req,res)=>
{
    const {invoice_date, estimate_payment_date, estimate_payment_date_2, estimate_payment_date_3, ammount_no_tax, ammount_tax_incl, estimate_tax, actual_payment_date, ammount_of_income_tax_incl, comments, verified, createdAt, updatedAt} = req.body

    try
    {
        await timologia.create({
         invoice_date:invoice_date,
         estimate_payment_date:estimate_payment_date,
         estimate_payment_date_2: estimate_payment_date_2,
         estimate_payment_date_3:estimate_payment_date_3,
         ammount_no_tax: ammount_no_tax,
         ammount_tax_incl: ammount_tax_incl,
         estimate_tax: estimate_tax,
         actual_payment_date: actual_payment_date,
         ammount_of_income_tax_incl: ammount_of_income_tax_incl,
         comments: comments,
         verified:verified,
         createdAt: createdAt,
         updatedAt: updatedAt
        });
        res.status(201).json({msg:"Timologia complete"});
    }
    catch(error)
    {
        res.status(400).json({msg:error.message});
    }
}
export const UpdateTimologia = async(req,res)=>{
    const Timologia = await timologia.findOne({
        where:{
            id:req.params.id
        }
    });
    if (!Timologia) return res.status(404).json({msg:"Timologia tideak ditek"});
    const {invoice_date, estimate_payment_date, estimate_payment_date_2, estimate_payment_date_3, ammount_no_tax, ammount_tax_incl, estimate_tax, actual_payment_date, ammount_of_income_tax_incl, comments, verified, createdAt, updatedAt} = req.body;
    try
    {
        await timologia.update({
         invoice_date:invoice_date,
         estimate_payment_date:estimate_payment_date,
         estimate_payment_date_2: estimate_payment_date_2,
         estimate_payment_date_3:estimate_payment_date_3,
         ammount_no_tax: ammount_no_tax,
         ammount_tax_incl: ammount_tax_incl,
         estimate_tax: estimate_tax,
         actual_payment_date: actual_payment_date,
         ammount_of_income_tax_incl: ammount_of_income_tax_incl,
         comments: comments,
         verified:verified,
         createdAt: createdAt,
         updatedAt: updatedAt
        },{
            where:{
                id:Timologia.id
            }
        });
        res.status(200).json({msg: "Timologio Updated"})
    }
    catch(error)
    {
        res.status(400).json({msg:error.message});
    }
}
export const DeleteTimologio = async(req,res)=>
{
    const Timologio = await timologia.findOne({
        where:{
            id:req.params.id
        }
    });
    if(!Timologio) return res.status(404).json({msg:"Timologio tideak ditek"});
    try
    {
        await timologia.destroy({
            where:{
                id:Timologio.id
            }
        });
        res.status(200).json({msg:"Timologio deleted"});
    }
    catch(error)
    {
        res.status(400).json({msg:error.message});
    }
}
export const getTimologioById = async(req,res) =>
{
    try
    {
        const response = await timologia.findOne({
            attributes:['id','invoice_date','estimate_payment_date','estimate_payment_date_2','estimate_payment_date_3','ammount_no_tax','ammount_tax_incl','estimate_tax', 'actual_payment_date', 'ammount_of_income_tax_incl', 'comments', 'verified', 'createdAt', 'updatedAt'],
            where:{
                id:req.params.id
            }
        });
        res.status(200).json(response);
    }
    catch(error)
    {
        res.status(500).json({ msg:error.message });
    }
}
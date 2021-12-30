import {db} from '../app.js';
import fs from 'fs';
import { Blob } from 'buffer';

export const homepage = (req,res) =>{
    let sql="Select brand_name from brand order by brand_name ASC";
    var result;
    var results;
    db.query(sql,(err,result)=>{
        if(err){
            throw err;
        }
        results=JSON.parse(JSON.stringify(result));
        res.render('index',{results});
    }); 
}

export const brandpage = (req,res) =>
{
    console.log(req.body);
    var brand_name=req.body.brand_name;
    let sql="Select * from brandpage where brand_name = '" + brand_name + "'";
    var result;
    var results;
    db.query(sql,(err,result)=>{
        if(err){
            throw err;
        }
        results=JSON.parse(JSON.stringify(result));
        console.log(results);
        res.render('brand',{results,brand_name});
    });  
}

export const scooterpage = (req,res) =>
{
    console.log(req.body);
    var scooter_name=req.body.scooter_name;
    let sql="Select * from scooterpage where scooter_name = '" + scooter_name + "'";
    var result;
    var results;
    var data;
    db.query(sql,(err,result)=>{
        if(err){
            throw err;
        }
        results=JSON.parse(JSON.stringify(result));
        data=results[0];
        res.render('scooter',{data});
    });  
}

export const brandimagepage = (req,res) =>
{
    res.render('brandimage');
}



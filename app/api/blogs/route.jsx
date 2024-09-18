import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import {writeFile} from "fs/promises";
import BlogModel from "@/lib/models/Blogmodel";
const fs=require('fs');


const LoadDb=async()=>{
    await ConnectDB();
}
LoadDb();

export async function GET(req) {
       let blogId=req.nextUrl.searchParams.get("id");
       if(blogId){
        const blog=await BlogModel.findById(blogId);
        return NextResponse.json(blog);

       }
        const blogs=await BlogModel.find({});
        return NextResponse.json({blogs});
    
}
export async function POST(req) {
    let formData=await req.formData();
    const timestamp=Date.now();
    const image=formData.get("image");
    const imageByteData= await image.arrayBuffer();
    const buffer=Buffer.from(imageByteData);
    const path=`./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl=`/${timestamp}_${image.name}`;
    const blogdata={
        title:`${formData.get("title")}`,
        description:`${formData.get("description")}`,
        category:`${formData.get("category")}`,
        image:`${imgUrl}`,
        author:`${formData.get("author")}`,
        authorImg:`${formData.get("aI")}`
    }
    await BlogModel.create(blogdata);
    return NextResponse.json({success:true,msg:"Blog added"});
}
export async function DELETE(req) {
    let blogId=req.nextUrl.searchParams.get("id");
    let bi= await BlogModel.findById(blogId);
    fs.unlink(`./public/${bi.image}`,()=>{});
    await BlogModel.findByIdAndDelete(blogId);
    return NextResponse.json({success:true});
}
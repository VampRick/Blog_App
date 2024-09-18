import MailModel from "@/lib/models/Mailmodel";
import axios from "axios";
import { NextResponse } from "next/server";
import { comma } from "postcss/lib/list";

const { ConnectDB } = require("@/lib/config/db")

const Loaddb=async()=>{
    await ConnectDB();
}
Loaddb();
export async function POST(req) {
    const formData=await req.formData();
    const Mail={
        email:`${formData.get("mail")}`
    }
    await MailModel.create(Mail);
    return NextResponse.json({success:true});
}
export async function GET(req){
    const data=await MailModel.find();
    return NextResponse.json({data});

}
export async function DELETE(req){
    const mailId=req.nextUrl.searchParams.get("ok");
    await MailModel.findByIdAndDelete(mailId);
    return NextResponse.json({success:true});
}
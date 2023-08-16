import { pool } from "@/app/mysqlpool";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const data = await new URLSearchParams(req.url.split("?")[1]);

  const getInquiryType = (data: URLSearchParams) => {
    if (data.get("Website")) return "Website";
    if (data.get("Inquiry")) return "Inquiry";
    if (data.get("Software")) return "Software";
    if (data.get("Design")) return "Design";
    if (data.get("Other")) return "Other";
  };
  const dataObj = {
    name: data.get("name"),
    email: data.get("email"),
    company: data.get("company"),
    phone: data.get("phone"),
    description: data.get("description"),
    budget: data.get("budget"),
    type: getInquiryType(data),
  };
  pool.getConnection((err, conn) => {
    if (err) throw err;

    conn.query(
      `INSERT INTO inquiries (name, email, company, phone, description, budget, type) VALUES ('${dataObj.name}', '${dataObj.email}', '${dataObj.company}', '${dataObj.phone}', '${dataObj.description}', '${dataObj.budget}', '${dataObj.type}')`,
      (err, result) => {
        if (err) throw err;
      }
    );

    conn.release();
  });
  return NextResponse.redirect(new URL("/inquiry-submited", req.nextUrl).href);
}

import { User } from "@/types/prisma-schema";
import { NextResponse } from "next/server";

export async function GET() {
  const { users } = await fetch(`${process.env.BACKEND_URL}/users/all`, {
    method: "GET",
  }).then((data) => data.json());

  return NextResponse.json({
    users,
  });
}

export async function POST(req: Request) {
  const {name, email}: User = await req.json();

  await fetch(`${process.env.BACKEND_URL}/users/create`, {
    method: "POST",
    body: JSON.stringify({
      name,
      email
    })
  }).then((data) => data.json());
}
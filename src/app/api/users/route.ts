import { NextResponse } from "next/server";

export async function GET() {
  const { users } = await fetch(`${process.env.BACKEND_URL}/users/all`, {
    method: "GET",
  }).then((data) => data.json());

  return NextResponse.json({
    users,
  });
}

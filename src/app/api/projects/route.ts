import { NextResponse } from "next/server";
import projects from "@/data/projects.json";
import type { Project } from "@/types";

export async function GET() {
  try {
    // Type assertion since we know the structure matches
    const typedProjects = projects as Project[];
    
    return NextResponse.json({
      success: true,
      data: typedProjects,
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch projects",
      },
      { status: 500 }
    );
  }
}

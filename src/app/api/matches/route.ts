import { prisma } from "@/lib";

import { NextRequest, NextResponse } from "next/server";

const GET = async ( request: NextRequest ) => {
    try {
        const matches = await prisma.match.findMany({
            include: {
                teamA: { select: { description: true } },
                teamB: { select: { description: true }},
            }
        });
        return NextResponse.json( matches, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Hubo un error al buscar los partidos' }, { status: 500 });
    };
};

const POST = async ( request: NextRequest ) => {
    try {
        
    } catch (error) {
        
    };
};

const PUT = async ( request: NextRequest ) => {
    try {
        
    } catch (error) {
        
    };
};

const DELETE = async ( request: NextRequest ) => {
    try {
        
    } catch (error) {
        
    };
};

export { GET, PUT, DELETE, POST };
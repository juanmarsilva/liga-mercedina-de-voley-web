import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib"


const GET = async ( request: NextRequest ) => {
    try {
        const questions = await prisma.leagueFrequentQuestion.findMany();
        return NextResponse.json( questions, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Hubo un error al obtener las preguntas frecuentes' }, { status: 500 });
    };
};

const POST = async ( request: NextRequest ) => {
    try {
    
    
    } catch (error) {
        return NextResponse.json({ error: 'Hubo un error al crear la nueva pregunta' }, { status: 500 });
    };
};

const PUT = async ( request: NextRequest ) => {
    try {
        
        
    } catch (error) {
        return NextResponse.json({ error: 'Hubo un error al actualizar la pregunta' }, { status: 500 });
    };
};

const DELETE = async ( request: NextRequest ) => {
    try {
        
    } catch (error) {
        return NextResponse.json({ error: 'Hubo un error al querer eliminar la pregunta' }, { status: 500 });
    };
};



export { GET };
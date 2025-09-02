import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib";

import { NewsStatus } from "@/generated/prisma";

const GET = async ( request: NextRequest ) => {
    try {
        const news = await prisma.news.findMany({
            where: { status: NewsStatus.ACTIVE }
        });

        return NextResponse.json(
            news,
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Error al obtener las noticias' },
            { status: 500 }
        );
    };
};

const POST = async ( request: NextRequest ) => {
    try {
        const { title, description, imageUrl } = await request.json();

        if( !title ) {
            return NextResponse.json({ error: 'Debe ingresar un titulo para crear una nueva noticia.' }, { status: 400 });
        };
        
        if( !description ) {
            return NextResponse.json({ error: 'Debe ingresar una descripcion para crear una nueva noticia.' }, { status: 400 });
        };
        
        const newNotice = await prisma.news.create({ data: { title, description, imageUrl }});

        return NextResponse.json( newNotice, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Error al crear una nueva noticia' }, { status: 500 });
    }
};

const PUT = async ( request: NextRequest ) => {
    try {
        const { title, description, imageUrl, id, status } = await request.json();

        await prisma.news.update({ data: { title, description, imageUrl, status }, where: { id } });

        return NextResponse.json({ message: 'Noticia actualizada con exito!'}, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Error al actualizar una nueva noticia' }, { status: 500 });
    }
}

const DELETE = async ( request: NextRequest ) => {
    try {
        const { id } = await request.json();
        
        await prisma.news.delete({ where: { id }});

        return NextResponse.json({}, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: `No se logro eliminar la noticia!` }, { status: 500 });
    };
};

export { GET, POST, DELETE, PUT };
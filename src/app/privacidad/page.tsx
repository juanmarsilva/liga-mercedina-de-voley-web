import Image from "next/image";

export default function PrivacityPage() {
  return (
    <div className="bg-gray-900 text-gray-300 font-sans leading-relaxed min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="container mx-auto px-4 py-12 max-w-4xl">

        <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-white mb-2">Política de Privacidad de Datos</h1>
            <p className="text-lg text-gray-400">Última actualización: Septiembre de 2025</p>
        </header>

        <main className="space-y-8">
            
            <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Introducción</h2>
                <p>Bienvenido/a a la aplicación <strong className="text-white">
                    Liga Mercedina de Voley</strong>. Esta Política de Privacidad explica cómo manejamos la información de los usuarios. Nos comprometemos a proteger tu privacidad y a ser transparentes sobre cómo se gestionan tus datos.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Recopilación de Datos</h2>
                <p>La aplicación <strong className="text-white">
                    Liga Mercedina de Voley</strong> es una herramienta puramente informativa que muestra los resultados y noticias de la liga de vóley. <strong>No recopilamos, almacenamos, ni procesamos ningún tipo de dato personal</strong> de los usuarios, como nombres, correos electrónicos, números de teléfono o ubicaciones. Tu anonimato está garantizado al 100% mientras usas nuestra aplicación.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Permisos de la Aplicación</h2>
                <p>Para su correcto funcionamiento, la aplicación podría solicitar permisos básicos que son necesarios para mostrar contenido (ej. acceso a internet). Estos permisos se utilizan únicamente para el propósito declarado y <strong>no se usan para acceder o recopilar información personal</strong> de tu dispositivo.</p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Enlaces a Sitios Web de Terceros</h2>
                <p>La aplicación podría incluir enlaces a sitios web de terceros, como las páginas oficiales de la liga de vóley o noticias deportivas. Es importante que sepas que <strong>esta política de privacidad no se aplica a esos sitios externos</strong>. Te recomendamos revisar las políticas de privacidad de cada sitio que visites.</p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Seguridad de los Datos</h2>
                <p>Aunque no procesamos datos personales, nos tomamos la seguridad muy en serio. La aplicación está diseñada para ser segura y no comprometer la integridad de tu dispositivo.</p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Cambios en la Política de Privacidad</h2>
                <p>Podemos actualizar nuestra política de privacidad ocasionalmente. Cualquier cambio se publicará en esta página. Te invitamos a revisarla periódicamente para estar al tanto de cualquier modificación.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Contacto</h2>
                <p>Si tienes alguna pregunta o inquietud sobre nuestra política de privacidad, no dudes en contactarnos a través de <strong className="text-white"><a href="mailto:[Tu correo electrónico de contacto]" className="underline hover:text-gray-200">juanmartinsilva74@gmail.com</a></strong>.</p>
            </section>

        </main>
        
        <footer className="text-center mt-16 text-gray-500 text-sm">
            <p>&copy; 2025 
                Liga Mercedina de Voley. Todos los derechos reservados.</p>
        </footer>

        </div>

      </div>
    </div>
  );
}

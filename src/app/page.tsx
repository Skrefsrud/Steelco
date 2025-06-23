import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';

export default function HomePage() {
    return (
        <div className='min-h-screen bg-white'>
            {/* Header */}
            <header className='fixed top-0 right-0 left-0 z-50 border-b bg-white/95 backdrop-blur-sm'>
                <div className='container mx-auto flex items-center justify-between px-4 py-4'>
                    <Link href='/' className='flex items-center'>
                        <div className='text-2xl font-bold text-gray-900'>Steelco-Teknikk</div>
                    </Link>
                    <nav className='hidden items-center space-x-8 md:flex'>
                        <Link href='/produkter' className='text-gray-700 transition-colors hover:text-gray-900'>
                            Våre produkter
                        </Link>
                        <Link href='/kontakt' className='text-gray-700 transition-colors hover:text-gray-900'>
                            Kontakt oss
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className='relative flex h-screen items-center justify-center'>
                <div className='absolute inset-0'>
                    <Image
                        src='/images/hero-background.png'
                        alt='Railway construction site'
                        fill
                        className='object-cover'
                        priority
                    />
                    <div className='absolute inset-0 bg-gradient-to-b from-white/20 via-black/20 to-black/40' />
                </div>
                <div className='relative z-10 mx-auto max-w-4xl px-4 text-center'>
                    <h1 className='mb-6 text-4xl leading-tight font-bold text-white md:text-6xl'>
                        Steelco Teknikk – din leverandør innen kabelkanaler i miljøvennlig plast og isolasjon av
                        sporvekslere
                    </h1>
                </div>
            </section>

            {/* Company Information */}
            <section className='bg-gray-50 px-4 py-16'>
                <div className='container mx-auto max-w-4xl'>
                    <h2 className='mb-8 text-3xl font-bold text-gray-900'>Steelco-Teknikk</h2>
                    <div className='prose prose-lg leading-relaxed text-gray-700'>
                        <p className='mb-6'>
                            Vi er et familiedrevet selskap som siden 2005 har spesialisert oss på å levere gode,
                            miljøvennlige produkter innen kabelbeskyttelse og isolering. Vi er en utfordrer til
                            tradisjonelle leverandører som leverer kabelkanaler og kummer i betong. Våre produkter lages
                            av returavfall og har 10 % av CO₂-utslippet til tradisjonelle produkter med identisk
                            kvalitet. Det er også billig å være miljøvennlig, og det kommer kundene til gode.
                        </p>
                        <p className='mb-6'>
                            Vi har kontorer og et lite bufferlager på Eiksmarka i Bærum, samt hovedlager i Fredrikstad.
                        </p>
                        <p>Steelco-Teknikk leverer til firmaer og sluttbrukere.</p>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className='bg-white px-4 py-16'>
                <div className='container mx-auto max-w-6xl'>
                    <h2 className='mb-12 text-center text-3xl font-bold text-gray-900'>Våre produkter</h2>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
                        {/* Isoblock */}
                        <Card className='transition-shadow hover:shadow-lg'>
                            <CardHeader>
                                <div className='mb-4 flex h-48 w-full items-center justify-center rounded-lg bg-gray-200'>
                                    <Image
                                        src='/placeholder.svg?height=200&width=300'
                                        alt='Isoblock produkttegning'
                                        width={300}
                                        height={200}
                                        className='rounded-lg object-cover'
                                    />
                                </div>
                                <CardTitle>Isoblock</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className='mb-4'>
                                    Miljøvennlig isolasjonsløsning for sporvekslere med overlegen kvalitet.
                                </CardDescription>
                                <Button
                                    variant='outline'
                                    className='w-full border-gray-300 bg-white text-gray-900 hover:bg-gray-50'>
                                    Gå til produktside
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Kabelkanal 1 */}
                        <Card className='transition-shadow hover:shadow-lg'>
                            <CardHeader>
                                <div className='mb-4 flex h-48 w-full items-center justify-center rounded-lg bg-gray-200'>
                                    <Image
                                        src='/placeholder.svg?height=200&width=300'
                                        alt='Kabelkanal 1'
                                        width={300}
                                        height={200}
                                        className='rounded-lg object-cover'
                                    />
                                </div>
                                <CardTitle>Kabelkanal</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className='mb-4'>
                                    Robust kabelbeskyttelse laget av resirkulert materiale med minimal miljøpåvirkning.
                                </CardDescription>
                                <Button
                                    variant='outline'
                                    className='w-full border-gray-300 bg-white text-gray-900 hover:bg-gray-50'>
                                    Gå til produktside
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Wirthwein kabelkanal */}
                        <Card className='transition-shadow hover:shadow-lg'>
                            <CardHeader>
                                <div className='mb-4 flex h-48 w-full items-center justify-center rounded-lg bg-gray-200'>
                                    <Image
                                        src='/placeholder.svg?height=200&width=300'
                                        alt='Wirthwein kabelkanal'
                                        width={300}
                                        height={200}
                                        className='rounded-lg object-cover'
                                    />
                                </div>
                                <CardTitle>Wirthwein Kabelkanal</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className='mb-4'>
                                    Premium kabelkanaler med høy kvalitet og lang levetid for krevende prosjekter.
                                </CardDescription>
                                <Button
                                    variant='outline'
                                    className='w-full border-gray-300 bg-white text-gray-900 hover:bg-gray-50'>
                                    Gå til produktside
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Termaren TM29 ballastlim */}
                        <Card className='transition-shadow hover:shadow-lg'>
                            <CardHeader>
                                <div className='mb-4 flex h-48 w-full items-center justify-center rounded-lg bg-gray-200'>
                                    <Image
                                        src='/placeholder.svg?height=200&width=300'
                                        alt='Termaren TM29 ballastlim'
                                        width={300}
                                        height={200}
                                        className='rounded-lg object-cover'
                                    />
                                </div>
                                <CardTitle>Termaren TM29</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className='mb-4'>
                                    Spesiallim for ballastfesting med utmerket vedheft og værbestandighet.
                                </CardDescription>
                                <Button
                                    variant='outline'
                                    className='w-full border-gray-300 bg-white text-gray-900 hover:bg-gray-50'>
                                    Gå til produktside
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Certificate Link */}
            <section className='bg-gray-50 px-4 py-12'>
                <div className='container mx-auto max-w-4xl text-center'>
                    <Button asChild className='bg-gray-900 text-white hover:bg-gray-800'>
                        <Link
                            href='https://fflive.bisnode.no/988533602_NO_a36f9303-8f22-44bc-8ba9-9376975f3ec4'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Se vårt sertifikat
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className='bg-gray-900 px-4 py-8 text-white'>
                <div className='container mx-auto max-w-4xl text-center'>
                    <p className='mb-2 text-lg font-semibold'>Steelco-Teknikk A/S</p>
                    <p className='text-gray-400'>Copyright © 2025. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

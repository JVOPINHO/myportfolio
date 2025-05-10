import { Intro } from "@/components/intro";
import { Header } from "@/components/title";
import { Section } from '@/components/section'

export default async function Home() {
    return (
        <>
            <main>
                <Section id={'intro'}>
                    <Header/>
                    <Intro/>
                </Section>
            </main>
        </>
    )
}
"use client";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Main } from "@/app/components/Main";
import { SideBar } from "@/app/components/SideBar";
import { RecoilRoot } from "recoil";

export default function Home() {
    return (
        <RecoilRoot>
            <div className="h-screen w-full">
                <div className="h-[5%]">
                    <Header />
                </div>
                <div className="flex h-[92.5%] max-h-[92.5%]">
                    <SideBar />
                    <main className="overflow-y-scroll w-full">
                        <Main />
                    </main>
                </div>
                <div className="h-[2.5%]">
                    <Footer />
                </div>
            </div>
        </RecoilRoot>
    );
}

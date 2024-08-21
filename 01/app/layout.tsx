import { Metadata } from "next";
import Navigation from "../components/navitagation";

export const metadata: Metadata = {
    title: {
        template: "%s | Next Movies",
        default: "Loading...",
    },
    description: "The best movies",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <head></head>
            <body>
                <Navigation />

                {children}
            </body>
        </html>
    );
}

import { FC, ReactNode, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Onboarding from "./onboarding/Onboarding";

interface Props {
    children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
    const [onboarded, setOnboarded] = useState(false)
    return (
        <>
        {!onboarded && <Onboarding onboarded={onboarded} setOnboarded={setOnboarded} />}
            {onboarded && <div className="bg-white">
                <Header />
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
                <Footer />
            </div>}
        </>
    );
};

export default Layout;

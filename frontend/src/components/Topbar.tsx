import { Link } from "react-router-dom";
import { LayoutDashboard } from 'lucide-react';
import { SignedOut, SignedIn, SignOutButton } from '@clerk/clerk-react';
import SingInOAuthButtons from "./SingInOAuthButtons";

const Topbar = () => {

    const isAdmin = false;

    return (
        <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75
        backdrop-blur-md z-10">
            <div className="flex gap-2 items-center">
                Spotify
            </div>
            <div className="flex items-center gap-4">
                {isAdmin && (
                    <Link to={"/admin"}>
                        <LayoutDashboard className="size-4 mr-2"/>
                        Admin Dashboard
                    </Link>
                )}

                <SignedIn>
                    <SignOutButton />
                </SignedIn>

                <SignedOut>
                    <SingInOAuthButtons />
                </SignedOut>
            </div>
        </div>
    );
}

export default Topbar;
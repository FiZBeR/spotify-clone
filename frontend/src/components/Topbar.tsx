import { Link } from "react-router-dom";
import { LayoutDashboard } from 'lucide-react';

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
                    </Link>
                )}

                <SignedOut>
                    <SingInOAuthButtons />
                </SigedOut>
            </div>
        </div>
    );
}

export default Topbar;
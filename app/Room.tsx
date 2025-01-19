"use client";

import { ClientSideSuspense, LiveblocksProvider, RoomProvider } from "@liveblocks/react/suspense";
import { LiveMap } from "@liveblocks/client";
import Loader from "@/components/Loader";
import { ReactNode } from "react";

export function Room({ children }: { children: ReactNode }) {
    return (
        <LiveblocksProvider publicApiKey={"pk_dev_09Dj426hI2LuxSVSslRNGJEFL8NIKIcsLzoCRwDKDOqhQOd--DPMUrg5DI-6W8vt"}>
            <RoomProvider id="my-room"
                initialPresence={{ cursor: null, cursorColor: null, editingText: null }}
                initialStorage={{
                    canvasObjects: new LiveMap()
                }}
            >
                <ClientSideSuspense fallback={<Loader />}>
                    {() => children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
}


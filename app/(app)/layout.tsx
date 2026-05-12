import { Header } from "@/components/Header";
import { ClerkClientProvider } from "@/components/providers/ClerkClientProvider";
import { Toaster } from "@/components/ui/sonner";
import { CartStoreProvider } from "@/lib/store/cart-store-provider";
import { ChatStoreProvider } from "@/lib/store/chat-store-provider";
import { SanityLive } from "@/sanity/lib/live";
// import { ClerkProvider } from "@clerk/nextjs";

function Layout({ children }: { children: React.ReactNode }) {
  console.log(
    "DEBUG - Clerk Key:",
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
      ? "Founddddddddddddddddddddddd"
      : "MISSINGgggggggggg",
  );
  return (
    // <ClerkProvider>
    <ClerkClientProvider>
      <CartStoreProvider>
        <ChatStoreProvider>
          <Header />
          <main>{children}</main>
          <Toaster position="bottom-center" />
          <SanityLive />
        </ChatStoreProvider>
      </CartStoreProvider>
    </ClerkClientProvider>
    // </ClerkProvider>
  );
}

export default Layout;

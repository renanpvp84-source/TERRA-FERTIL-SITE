import type { Metadata } from "next";
import AccountView from "@/views/AccountView";

export const metadata: Metadata = { title: "Minha conta" };

export default function AccountPage() {
  return <AccountView />;
}

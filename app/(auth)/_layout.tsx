import { SafeAreaView } from "@/components/ui/safe-area-view";
import "@/global.css";
import { Stack } from "expo-router";

export default function RootLayout() {

  return (
  <SafeAreaView className="flex-1 bg-background p-5">
    <Stack screenOptions={{ headerShown: false }} />
  </SafeAreaView>)
}

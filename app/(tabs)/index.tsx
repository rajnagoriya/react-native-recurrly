import "@/global.css";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Link } from "expo-router";
import { Text } from "react-native";


export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind! hjhd
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary px-4 py-2 text-white hover:bg-primary/90">
        Go to onboarding
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary px-4 py-2 text-white hover:bg-primary/90">Create Account</Link>
       <Link href="/(tabs)/subscriptions" className="mt-4 rounded bg-primary px-4 py-2 text-white hover:bg-primary/90">View Spotify Subscription</Link>
        <Link 
        href={{
          pathname:"/subscriptions/[id]",
          params: { id: "claude"}
        }}
        className="mt-4 rounded bg-primary px-4 py-2 text-white hover:bg-primary/90">Claude Max Subscription</Link>
    </SafeAreaView>
  );
}
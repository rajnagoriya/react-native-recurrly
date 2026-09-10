import { SafeAreaView } from "@/components/ui/safe-area-view";
import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";


export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
       <Text className="text-7xl font-sans-extrabold">
       Home 
      </Text>
      <Text className="text-7xl font-bold "> 
       Home 
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary px-4 py-2 text-white hover:bg-primary/90">
        Go to onboarding
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary px-4 py-2 text-white hover:bg-primary/90">Create Account</Link>
       <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary px-4 py-2 text-white hover:bg-primary/90">Sign Up</Link>
       
    </SafeAreaView>
  );
}
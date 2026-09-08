import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-foreground">
        Welcome to Nativewind! hjhd
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary px-4 py-2 text-white hover:bg-primary/90">
        Go to onboarding
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary px-4 py-2 text-white hover:bg-primary/90">Create Account</Link>
       <Link href="/(tabs)/subscriptions/spotify" className="mt-4 rounded bg-primary px-4 py-2 text-white hover:bg-primary/90">View Spotify Subscription</Link>
        <Link 
        href={{
          pathname:"/(tabs)/subscriptions/[id]",
          params: { id: "claude"}
        }}
        className="mt-4 rounded bg-primary px-4 py-2 text-white hover:bg-primary/90">Claude Max Subscription</Link>
    </View>
  );
}
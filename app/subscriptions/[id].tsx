import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from '@/components/ui/safe-area-view';

const SubscriptionDetails = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>subscription Details : {id}</Text>
      <Link href="/(tabs)/subscriptions">Back to subscriptions</Link>
    </SafeAreaView>
  )
}

export default SubscriptionDetails
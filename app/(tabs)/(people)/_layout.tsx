import { Slot } from "expo-router";

export default function PeopleLayout() {
  // I used slot here because in the tabs _layout, I was using Links to navigate between Groups and events and using <Stack /> lead to unpredictable navigation behaviours.
  return <Slot />;
}

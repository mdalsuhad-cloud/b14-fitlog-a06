"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Workout } from "../types";

type PlanContextType = {
  plan: Workout[];
  saved: Workout[];
  done: number[];

  addToPlan: (workout: Workout) => boolean;
  removeFromPlan: (id: number) => void;

  saveForLater: (workout: Workout) => boolean;
  removeSaved: (id: number) => void;

  markAsDone: (id: number) => void;

  toast: string;
  showToast: (message: string) => void;
};

const PlanContext = createContext<PlanContextType | undefined>(
  undefined
);

export function PlanProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [done, setDone] = useState<number[]>([]);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");
    const storedDone = localStorage.getItem("fitlog-done");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }

    if (storedDone) {
      setDone(JSON.parse(storedDone));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    localStorage.setItem("fitlog-done", JSON.stringify(done));
  }, [done]);

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const addToPlan = (workout: Workout) => {
    if (plan.some((item) => item.id === workout.id)) {
      showToast("Already in today's plan");
      return false;
    }

    if (plan.length >= 5) {
      showToast("Today's plan is limited to 5 lifts");
      return false;
    }

    setPlan((current) => [...current, workout]);
    showToast("Added to today's plan");

    return true;
  };

  const removeFromPlan = (id: number) => {
    setPlan((current) =>
      current.filter((item) => item.id !== id)
    );

    showToast("Removed from today's plan");
  };

  const saveForLater = (workout: Workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      showToast("Already saved");
      return false;
    }

    setSaved((current) => [...current, workout]);
    showToast("Saved for later");

    return true;
  };

  const removeSaved = (id: number) => {
    setSaved((current) =>
      current.filter((item) => item.id !== id)
    );

    showToast("Removed from saved");
  };

  const markAsDone = (id: number) => {
    setDone((current) =>
      current.includes(id) ? current : [...current, id]
    );

    showToast("Workout marked as done");
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        done,
        addToPlan,
        removeFromPlan,
        saveForLater,
        removeSaved,
        markAsDone,
        toast,
        showToast,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error(
      "usePlan must be used inside PlanProvider"
    );
  }

  return context;
}
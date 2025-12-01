import { Space } from "@/interfaces/space";
import { supabase } from "./serverClient";


export const spaceRepository = {
  async getAll(): Promise<Space[]> {
    const { data, error } = await supabase.from("spaces").select("*");

    if (error) throw error;
    return data!;
  },

  async getById(id: string): Promise<Space | null> {
    const { data, error } = await supabase
      .from("spaces")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  }
};


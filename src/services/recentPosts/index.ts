/* eslint-disable prettier/prettier */
import { EnvConfig } from "@/src/config/EvnConfig";

export const getRecentPosts = async () => {
  const res = await fetch(
    `${EnvConfig.baseApi}/items?sortBy=-createdAt&limit=9`
  );

  return await res.json();
};

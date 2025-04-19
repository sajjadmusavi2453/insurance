import type { RouteRecordRaw } from "vue-router";

export interface AppRouteMeta {
  requireAuth?: boolean;
  title: string;
  layout?: "dashboard" | "auth";
}

export interface AppRoute extends Omit<RouteRecordRaw, "meta" | "components"> {
  meta?: AppRouteMeta;
  components?: {
    default?: RouteRecordRaw["component"];
    layout?: RouteRecordRaw["component"];
    footer?: RouteRecordRaw["component"];
  };
}

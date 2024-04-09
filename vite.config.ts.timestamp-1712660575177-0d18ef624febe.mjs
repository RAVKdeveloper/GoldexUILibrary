// vite.config.ts
import { defineConfig } from "file:///C:/Users/PC1/Pictures/Work/ui-framework/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import react from "file:///C:/Users/PC1/Pictures/Work/ui-framework/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { libInjectCss } from "file:///C:/Users/PC1/Pictures/Work/ui-framework/node_modules/vite-plugin-lib-inject-css/dist/index.js";
import dts from "file:///C:/Users/PC1/Pictures/Work/ui-framework/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\PC1\\Pictures\\Work\\ui-framework";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ["lib"] })
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/main.ts"),
      formats: ["es"]
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-router-dom"],
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQQzFcXFxcUGljdHVyZXNcXFxcV29ya1xcXFx1aS1mcmFtZXdvcmtcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFBDMVxcXFxQaWN0dXJlc1xcXFxXb3JrXFxcXHVpLWZyYW1ld29ya1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvUEMxL1BpY3R1cmVzL1dvcmsvdWktZnJhbWV3b3JrL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuaW1wb3J0IHsgbGliSW5qZWN0Q3NzIH0gZnJvbSAndml0ZS1wbHVnaW4tbGliLWluamVjdC1jc3MnXHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgbGliSW5qZWN0Q3NzKCksXHJcbiAgICBkdHMoeyBpbmNsdWRlOiBbJ2xpYiddIH0pXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgbGliOiB7XHJcbiAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdsaWIvbWFpbi50cycpLFxyXG4gICAgZm9ybWF0czogWydlcyddXHJcbiAgICB9LFxyXG4gICAgY29weVB1YmxpY0RpcjogZmFsc2UsXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0L2pzeC1ydW50aW1lJywgJ3JlYWN0LXJvdXRlci1kb20nXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdW2V4dG5hbWVdJyxcclxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5qcycsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVCxTQUFTLG9CQUFvQjtBQUNoVixTQUFTLGVBQWU7QUFDeEIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUpoQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsSUFDYixJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQUEsRUFDMUI7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU8sUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDdkMsU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNkO0FBQUEsSUFDQSxlQUFlO0FBQUEsSUFDZixlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxxQkFBcUIsa0JBQWtCO0FBQUEsTUFDM0QsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

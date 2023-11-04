import { defineConfig } from "turbowatch";

export default defineConfig({
  project: __dirname,
  triggers: [
    {
      expression: ["match", "*.css", "basename"],
      name: "build",
      onChange: async ({ spawn }) => {
        await spawn`lightningcss --minify --bundle --targets 'defaults' css/index.css -o style.css`;
      },
    },
  ],
});

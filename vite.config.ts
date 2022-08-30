import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    base: '/popup-madness-UiKit/',
	plugins: [react(), eslint(), svgr()]
})

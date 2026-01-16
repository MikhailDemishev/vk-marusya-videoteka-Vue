import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  // Vue files
  {
    files: ['**/*.vue'],
    plugins: {
      vue: pluginVue,
    },
    rules: {
      'vue/no-undef-components': [
        'error',
        {
          ignorePatterns: ['RouterView', 'RouterLink'],
        },
      ],
    },
  },

  // TS files
  vueTsConfigs.recommended,

  skipFormatting,
)

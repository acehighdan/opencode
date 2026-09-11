import { Show } from "solid-js"
import { createMediaQuery } from "@solid-primitives/media"
import { Icon } from "@opencode-ai/ui/icon"
import { IconButton } from "@opencode-ai/ui/icon-button"
import { Icon as IconV2 } from "@opencode-ai/ui/v2/icon"
import { IconButtonV2 } from "@opencode-ai/ui/v2/icon-button-v2"
import { TooltipV2 } from "@opencode-ai/ui/v2/tooltip-v2"
import { useLanguage } from "@/context/language"
import { useLayout } from "@/context/layout"
import { useSettings } from "@/context/settings"

export function SessionFullscreenToggle() {
  const language = useLanguage()
  const layout = useLayout()
  const settings = useSettings()
  const isDesktop = createMediaQuery("(min-width: 768px)")

  const expanded = () => !layout.fileTree.opened()
  const label = language.t("command.fileTree.toggle")

  return (
    <Show when={isDesktop()}>
      <TooltipV2 class="shrink-0" placement="bottom" shift={-8} value={label}>
        {settings.general.newLayoutDesigns() ? (
          <IconButtonV2
            type="button"
            variant="ghost-muted"
            size="large"
            class="shrink-0"
            state={expanded() ? "pressed" : undefined}
            onClick={() => layout.fileTree.toggle()}
            aria-label={label}
            aria-expanded={expanded()}
            aria-controls="file-tree-panel"
            icon={<IconV2 name="sidebar-right" />}
          />
        ) : (
          <IconButton
            variant="ghost"
            class="size-6 shrink-0"
            icon={expanded() ? "layout-right-full" : "layout-right"}
            onClick={() => layout.fileTree.toggle()}
            aria-label={label}
            aria-expanded={expanded()}
            aria-controls="file-tree-panel"
          />
        )}
      </TooltipV2>
    </Show>
  )
}
import { LucideCheck, LucideCopy } from "lucide-react";
import { useState } from "react";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "~/components/ui/hover-card";
import { Item, ItemActions, ItemContent, ItemMedia } from "~/components/ui/item";
import { Toggle } from "~/components/ui/toggle";

export function SymbolChip({ symbol, name }: { symbol: string; name: string }) {
	const [copyButtonPressed, setCopyButtonPressed] = useState(false);

	return (
		<HoverCard>
			<HoverCardTrigger
				delay={100}
				closeDelay={100}
				className="bg-secondary mx-1 inline-flex items-center gap-1 rounded-sm border px-0 py-0 align-middle font-semibold"
				render={<code />}
			>
				{symbol}
			</HoverCardTrigger>
			<HoverCardContent className="w-max items-center gap-2 px-3 py-1 shadow-sm" render={<Item />}>
				<ItemMedia variant="icon" className="text-base">
					{symbol}
				</ItemMedia>

				<ItemContent className="text-xs">
					<p>{`${name} ／ U+${symbol.charCodeAt(0).toString(16).toUpperCase()}`}</p>
				</ItemContent>

				<ItemActions>
					<Toggle
						pressed={copyButtonPressed}
						onPressedChange={() => {
							navigator.clipboard.writeText(symbol);
							if (copyButtonPressed) return;
							setCopyButtonPressed(true);
							setTimeout(() => setCopyButtonPressed(false), 2000);
						}}
						className="-mr-2 ml-2 size-8 min-w-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md"
					>
						{copyButtonPressed ? (
							<LucideCheck size={16} className="animate-in fade-in zoom-in" />
						) : (
							<LucideCopy size={16} className="animate-in fade-in zoom-in" />
						)}
					</Toggle>
				</ItemActions>
			</HoverCardContent>
		</HoverCard>
	);
}

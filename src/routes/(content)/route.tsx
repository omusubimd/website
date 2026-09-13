import { SiDiscord, SiGithub } from "@icons-pack/react-simple-icons";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import {
	LucideAstroid,
	LucideEllipsis,
	LucideExternalLink,
	LucideGem,
	LucidePyramid,
	LucideSpace,
	LucideUnderline,
} from "lucide-react";

import { Button } from "~/components/ui/button";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
} from "~/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";

export const Route = createFileRoute("/(content)")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<TooltipProvider>
			<SidebarProvider>
				<Sidebar>
					<SidebarHeader>
						<SidebarMenu>
							<SidebarMenuItem>
								<header className="flex flex-row items-center gap-2 p-2 select-none">
									<LucidePyramid />
									<span className="text-lg font-bold">おむすび大作戦</span>
								</header>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarHeader>

					<SidebarContent>
						<SidebarGroup>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton render={<Link to="/" />}>はじめましょう</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroup>

						<SidebarGroup>
							<SidebarGroupLabel>ガイド</SidebarGroupLabel>

							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>マークダウンとは？</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>

						<SidebarGroup>
							<SidebarGroupLabel>仕様</SidebarGroupLabel>

							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton render={<Link to="/$" params={{ _splat: "syntax/ruby" }} />}>
											<LucideGem />
											ルビ
										</SidebarMenuButton>
									</SidebarMenuItem>

									<SidebarMenuItem>
										<SidebarMenuButton
											render={<Link to="/$" params={{ _splat: "syntax/annotation" }} />}
										>
											<LucideEllipsis />
											傍点
										</SidebarMenuButton>
									</SidebarMenuItem>

									<SidebarMenuItem>
										<SidebarMenuButton
											render={<Link to="/$" params={{ _splat: "syntax/indent" }} />}
										>
											<LucideSpace />
											字下げによる段落開始
										</SidebarMenuButton>
									</SidebarMenuItem>

									<SidebarMenuItem>
										<SidebarMenuButton>
											<LucideUnderline />
											下線
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>

						<SidebarGroup>
							<SidebarGroupLabel>参考</SidebarGroupLabel>

							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>その他の機能</SidebarMenuButton>
										<SidebarMenuAction>
											<LucideExternalLink />
										</SidebarMenuAction>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					</SidebarContent>

					<SidebarFooter>
						<SidebarMenu>
							<SidebarMenuItem className="flex flex-row">
								<Tooltip>
									<TooltipTrigger render={<Button variant="ghost" size="icon" />}>
										<SiGithub aria-label="Github" />
									</TooltipTrigger>
									<TooltipContent>リポジトリ</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger render={<Button variant="ghost" size="icon" />}>
										<SiDiscord aria-label="Discord" />
									</TooltipTrigger>
									<TooltipContent>コミュニティ</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger render={<Button className="ml-auto" variant="ghost" size="icon" />}>
										<LucideAstroid aria-label="AI" />
									</TooltipTrigger>
									<TooltipContent>AI</TooltipContent>
								</Tooltip>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarFooter>
				</Sidebar>

				<Outlet />
			</SidebarProvider>
		</TooltipProvider>
	);
}

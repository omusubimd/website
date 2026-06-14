import { SiGithub } from "@icons-pack/react-simple-icons";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LucideEllipsis, LucideExternalLink, LucideGem, LucideSpace, LucideUnderline } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
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
					<SidebarContent>
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
										<SidebarMenuButton>
											<LucideGem />
											ルビ
										</SidebarMenuButton>
									</SidebarMenuItem>

									<SidebarMenuItem>
										<SidebarMenuButton>
											<LucideEllipsis />
											傍点
										</SidebarMenuButton>
									</SidebarMenuItem>

									<SidebarMenuItem>
										<SidebarMenuButton>
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
										<SidebarMenuButton>
											その他の機能
											<SidebarMenuAction>
												<LucideExternalLink />
											</SidebarMenuAction>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					</SidebarContent>

					<SidebarFooter>
						<SidebarMenu>
							<SidebarMenuItem>
								<Tooltip>
									<TooltipTrigger
										render={
											<Button
												variant="ghost"
												size="icon"
												render={
													<a
														href="https://github.com/omusubi/markdown"
														target="_blank"
														rel="noopener"
													>
														<SiGithub aria-label="GitHub リポジトリへ (新しいタブで開きます)" />
													</a>
												}
											/>
										}
									/>
									<TooltipContent>Github</TooltipContent>
								</Tooltip>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarFooter>
				</Sidebar>

				<main>
					<Outlet />
				</main>
			</SidebarProvider>
		</TooltipProvider>
	);
}

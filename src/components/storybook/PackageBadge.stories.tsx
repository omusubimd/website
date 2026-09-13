import type { Meta, StoryObj } from "@storybook/react-vite";

import { PackageBadge } from "../PackageBadge";

const meta = {
	title: "Components/PackageBadge",
	component: PackageBadge,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		type: {
			control: "select",
			options: ["remark"],
		},
		status: {
			control: "select",
			options: ["stable", "beta", "planned", "not-started"],
		},
	},
	args: {
		type: "remark",
		status: "stable",
	},
} satisfies Meta<typeof PackageBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stable: Story = {};

export const Beta: Story = {
	args: { status: "beta" },
};

export const Planned: Story = {
	args: { status: "planned" },
};

export const NotStarted: Story = {
	args: { status: "not-started" },
};

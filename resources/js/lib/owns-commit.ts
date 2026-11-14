type Owner = {
    user: { id: string } | null;
    organizations: { id: string }[];
};

/**
 * Whether a commit is the user's own: from them, or from an organization they can post as. The server refuses to let
 * anyone star or award their own commits, so what shows those buttons asks this first.
 */
export function ownsCommit(
    { user, organizations }: Owner,
    commit: { author: { id: string } },
): boolean {
    return (
        commit.author.id === user?.id ||
        organizations.some(
            (organization) => organization.id === commit.author.id,
        )
    );
}

import { Platform } from "@asu-etx/rl-server-lib/src/util/Platform";
import { getAssignmentsByContext } from "../services/AssignmentService";
import { DEEP_LINK_RESOURCELINKS_ENDPOINT } from "@asu-etx/rl-shared";
import { logger, Assignment } from "@asu-etx/rl-shared";

const getDeepLinkAssignments = async (platform: Platform): Promise<any> => {
  const assignments: Assignment[] = await getAssignmentsByContext(
    platform.context_id
  );
  const items = [];
  logger.debug(`getDeepLintAssnments: platform:${JSON.stringify(platform)}`);
  for (const assignment of assignments) {
    items.push({
      type: assignment.type,
      title: assignment.title,
      url: assignment.url,
      resourceId: assignment.resource_id,
      lineItem: {
        scoreMaximum: assignment.lineitem_score_maximum,
        label: assignment.lineitem_label,
        resourceId: assignment.lineitem_resource_id,
        tag: assignment.lineitem_tag
      }
    });
  }
  return items;
};
const getDeepLinkItems = async (
  endpoint: string,
  platform: Platform
): Promise<any> => {
  if (endpoint == DEEP_LINK_RESOURCELINKS_ENDPOINT) {
    return await getDeepLinkAssignments(platform);
  }
  return [];
};

export default getDeepLinkItems;

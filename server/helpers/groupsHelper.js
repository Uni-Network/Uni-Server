// eslint-disable-next-line import/no-duplicates
import { group as Group } from '../models';
// eslint-disable-next-line camelcase,no-duplicate-imports,import/no-duplicates
import { user_groups as UserGroups } from '../models';

const Sequelize = require('sequelize');

export async function userInGroup(userId, groupId) {
  const count = await UserGroups.count({ where: { user_id: userId, group_id: groupId } });
  return (count > 0);
}

export async function getAllGroupsFromDB() {
    // Return all countries
  try {
    return Group.findAll();
  } catch (error) {
    throw (error);
  }
}
export async function getGroupsByNameFromDB(name) {
    // Return all countries that match the specific name
  try {
    return Group.findAll({
      where: {
        group_name: {
          [Sequelize.Op.iLike]: `%${name}%`,
        },
      },
    });
  } catch (error) {
    throw (error);
  }
}

// eslint-disable-next-line import/no-duplicates
import { group as Group } from '../models';
// eslint-disable-next-line camelcase,no-duplicate-imports,import/no-duplicates
import { user_groups as UserGroups } from '../models';

const Sequelize = require('sequelize');

export async function userInGroup(userId, groupId) {
  const response = await UserGroups.findOne({ where: { user_id: userId, group_id: groupId } });
  return response != null;
}

export async function getAllGroupsFromDB() {
    // Return all countries
  try {
    return await Group.findAll();
  } catch (error) {
    throw (error);
  }
}
export async function getGroupsByNameFromDB(name) {
    // Return all countries that match the specific name
  try {
    return await Group.findAll({
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

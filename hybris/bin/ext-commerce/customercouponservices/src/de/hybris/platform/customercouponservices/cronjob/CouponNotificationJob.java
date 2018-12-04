/*
 * [y] hybris Platform
 *
 * Copyright (c) 2018 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package de.hybris.platform.customercouponservices.cronjob;

import java.util.Map;

import de.hybris.platform.core.model.ItemModel;


/**
 * Default implementation to send BACK_IN_STOCK notification to customer
 */
public class CouponNotificationJob extends AbstractCouponNotificationJob
{
	@Override
	protected CouponNotificationTask createTask(final Map<String, ItemModel> data)
	{
		return new CouponNotificationTask(getNotificationService(), data);
	}
}
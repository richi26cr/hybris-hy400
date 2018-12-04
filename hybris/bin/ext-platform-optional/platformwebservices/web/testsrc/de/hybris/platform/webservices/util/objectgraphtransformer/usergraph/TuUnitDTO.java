/*
 * [y] hybris Platform
 *
 * Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package de.hybris.platform.webservices.util.objectgraphtransformer.usergraph;

import de.hybris.platform.webservices.util.objectgraphtransformer.GraphNode;


@GraphNode(target = TuUnitModel.class)
public class TuUnitDTO
{
	private String isocode = null;

	/**
	 * @return the isocode
	 */
	public String getIsocode()
	{
		return isocode;
	}

	/**
	 * @param isocode
	 *           the isocode to set
	 */
	public void setIsocode(final String isocode)
	{
		this.isocode = isocode;
	}

}
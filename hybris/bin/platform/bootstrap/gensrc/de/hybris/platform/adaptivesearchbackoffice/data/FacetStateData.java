/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN!
 * --- Generated at May 8, 2018 2:42:47 PM
 * ----------------------------------------------------------------
 *
 * [y] hybris Platform
 *
 * Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package de.hybris.platform.adaptivesearchbackoffice.data;

import java.io.Serializable;
import de.hybris.platform.adaptivesearch.data.AsFacetVisibility;

public  class FacetStateData  implements Serializable 
{

 	/** Default serialVersionUID value. */
 
 	private static final long serialVersionUID = 1L;

	/** <i>Generated property</i> for <code>FacetStateData.facetVisibility</code> property defined at extension <code>adaptivesearchbackoffice</code>. */
		
	private AsFacetVisibility facetVisibility;
	
	public FacetStateData()
	{
		// default constructor
	}
	
		
	
	public void setFacetVisibility(final AsFacetVisibility facetVisibility)
	{
		this.facetVisibility = facetVisibility;
	}

		
	
	public AsFacetVisibility getFacetVisibility() 
	{
		return facetVisibility;
	}
	


}

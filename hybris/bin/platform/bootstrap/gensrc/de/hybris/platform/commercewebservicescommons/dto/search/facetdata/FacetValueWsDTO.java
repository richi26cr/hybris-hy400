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
package de.hybris.platform.commercewebservicescommons.dto.search.facetdata;

import java.io.Serializable;
import de.hybris.platform.commercewebservicescommons.dto.search.SearchStateWsDTO;

/**
 * POJO representing a facet value.
 */
public  class FacetValueWsDTO  implements Serializable 
{

 	/** Default serialVersionUID value. */
 
 	private static final long serialVersionUID = 1L;

	/** <i>Generated property</i> for <code>FacetValueWsDTO.name</code> property defined at extension <code>commercewebservicescommons</code>. */
		
	private String name;

	/** <i>Generated property</i> for <code>FacetValueWsDTO.count</code> property defined at extension <code>commercewebservicescommons</code>. */
		
	private Long count;

	/** <i>Generated property</i> for <code>FacetValueWsDTO.query</code> property defined at extension <code>commercewebservicescommons</code>. */
		
	private SearchStateWsDTO query;

	/** <i>Generated property</i> for <code>FacetValueWsDTO.selected</code> property defined at extension <code>commercewebservicescommons</code>. */
		
	private Boolean selected;
	
	public FacetValueWsDTO()
	{
		// default constructor
	}
	
		
	
	public void setName(final String name)
	{
		this.name = name;
	}

		
	
	public String getName() 
	{
		return name;
	}
	
		
	
	public void setCount(final Long count)
	{
		this.count = count;
	}

		
	
	public Long getCount() 
	{
		return count;
	}
	
		
	
	public void setQuery(final SearchStateWsDTO query)
	{
		this.query = query;
	}

		
	
	public SearchStateWsDTO getQuery() 
	{
		return query;
	}
	
		
	
	public void setSelected(final Boolean selected)
	{
		this.selected = selected;
	}

		
	
	public Boolean getSelected() 
	{
		return selected;
	}
	


}

package com.cl.dao;

import com.cl.entity.SheshibaoxiuEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.SheshibaoxiuView;


/**
 * 设施报修
 * 
 * @author 
 * @email 
 * @date 2024-03-29 14:15:48
 */
public interface SheshibaoxiuDao extends BaseMapper<SheshibaoxiuEntity> {
	
	List<SheshibaoxiuView> selectListView(@Param("ew") Wrapper<SheshibaoxiuEntity> wrapper);

	List<SheshibaoxiuView> selectListView(Pagination page,@Param("ew") Wrapper<SheshibaoxiuEntity> wrapper);
	
	SheshibaoxiuView selectView(@Param("ew") Wrapper<SheshibaoxiuEntity> wrapper);
	

}
